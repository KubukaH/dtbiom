package routes

import (
	"context"
	"fmt"
	"net/http"
	"time"

	"server/models"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var validate = validator.New()

var messageCollection *mongo.Collection = OpenCollection(Client, "messages")

// add an message
func AddMessage(c *gin.Context) {

	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	var message models.Message

	if err := c.BindJSON(&message); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}

	validationErr := validate.Struct(message)
	if validationErr != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		fmt.Println(validationErr)
	}
	message.ID = primitive.NewObjectID()

	result, insertErr := messageCollection.InsertOne(ctx, message)
	if insertErr != nil {
		msg := fmt.Sprintf("message item was not created")
		c.JSON(http.StatusInternalServerError, gin.H{"error": msg})
		fmt.Println(insertErr)
		return
	}
	defer cancel()

	c.JSON(http.StatusOK, result)
}

// get all orders
func GetMessages(c *gin.Context) {

	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	var msgs []bson.M

	cursor, err := messageCollection.Find(ctx, bson.M{})

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}

	if err = cursor.All(ctx, &msgs); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}

	defer cancel()

	c.JSON(http.StatusOK, msgs)
}

// get all orders by the waiter's name
func GetMessagesByUser(c *gin.Context) {

	user := c.Params.ByName("user")

	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	var msgs []bson.M

	cursor, err := messageCollection.Find(ctx, bson.M{"server": user})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}

	if err = cursor.All(ctx, &msgs); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}

	defer cancel()

	c.JSON(http.StatusOK, msgs)
}

// get an message by its id
func GetMessageById(c *gin.Context) {

	msgID := c.Params.ByName("id")
	docID, _ := primitive.ObjectIDFromHex(msgID)

	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	var message bson.M

	if err := messageCollection.FindOne(ctx, bson.M{"_id": docID}).Decode(&message); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}

	defer cancel()

	c.JSON(http.StatusOK, message)
}

// update a user's name for a message
func UpdateUser(c *gin.Context) {

	msgID := c.Params.ByName("id")
	docID, _ := primitive.ObjectIDFromHex(msgID)

	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	type User struct {
		Server *string `json:"server"`
	}

	var user User

	if err := c.BindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}

	result, err := messageCollection.UpdateOne(ctx, bson.M{"_id": docID},
		bson.D{
			{"$set", bson.D{{"server", user.Server}}},
		},
	)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}

	defer cancel()

	c.JSON(http.StatusOK, result.ModifiedCount)

}

// update the message
func UpdateMessage(c *gin.Context) {

	msgID := c.Params.ByName("id")
	docID, _ := primitive.ObjectIDFromHex(msgID)

	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	var message models.Message

	if err := c.BindJSON(&message); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}

	validationErr := validate.Struct(message)
	if validationErr != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		fmt.Println(validationErr)
		return
	}

	result, err := messageCollection.ReplaceOne(
		ctx,
		bson.M{"_id": docID},
		bson.M{
			"names":       message.Names,
			"email":       message.Email,
			"phonenumber": message.Phonenumber,
			"private":     message.Private,
			"public":      message.Public,
			"message":     message.Message,
		},
	)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}

	defer cancel()

	c.JSON(http.StatusOK, result.ModifiedCount)
}

// delete an message given the id
func DeleteMessage(c *gin.Context) {

	msgID := c.Params.ByName("id")
	docID, _ := primitive.ObjectIDFromHex(msgID)

	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	result, err := messageCollection.DeleteOne(ctx, bson.M{"_id": docID})

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}

	defer cancel()

	c.JSON(http.StatusOK, result.DeletedCount)

}
