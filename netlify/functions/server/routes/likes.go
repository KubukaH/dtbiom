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

var vali = validator.New()

var likesCollection *mongo.Collection = OpenCollection(Client, "likes")

// add an like
func MakeLike(c *gin.Context) {

	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	var like models.Like

	if err := c.BindJSON(&like); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}

	validationErr := vali.Struct(like)
	if validationErr != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		fmt.Println(validationErr)
	}
	like.ID = primitive.NewObjectID()

	result, insertErr := likesCollection.InsertOne(ctx, like)
	if insertErr != nil {
		msg := "like item was not created"
		c.JSON(http.StatusInternalServerError, gin.H{"error": msg})
		fmt.Println(insertErr)
		return
	}
	defer cancel()

	c.JSON(http.StatusOK, result)
}

// delete an message given the id
func UnLike(c *gin.Context) {

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

// get all likes by the message
func GetMessageLikes(c *gin.Context) {

	// msgID := c.Params.ByName("likeid")
	// docID, _ := primitive.ObjectIDFromHex(msgID)

	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	var likes []bson.M

	cursor, err := likesCollection.Find(ctx, bson.M{})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}

	if err = cursor.All(ctx, &likes); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}

	defer cancel()

	c.JSON(http.StatusOK, likes)
}
