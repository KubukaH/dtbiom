package routes

import (
	"context"
	"fmt"
	"net/http"
	"server/models"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var valid = validator.New()
var accountsCollection *mongo.Collection = OpenCollection(Client, "accounts")

func CreateAccount(c *gin.Context) {
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	var account models.Account

	if err := c.BindJSON(&account); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}

	validationErr := valid.Struct(account)
	if validationErr != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		fmt.Println(validationErr)
	}

	account.ID = primitive.NewObjectID()

	result, insertErr := accountsCollection.InsertOne(ctx, account)
	if insertErr != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Account item was not created"})
		fmt.Println(insertErr)
		return
	}
	defer cancel()

	c.JSON(http.StatusOK, result)
}

func authenticate(c *gin.Context)   {}
func refreshToken(c *gin.Context)   {}
func revokeToken(c *gin.Context)    {}
func register(c *gin.Context)       {}
func verifyEmail(c *gin.Context)    {}
func forgotPassword(c *gin.Context) {}
func validateResetPassword()        {}
func resetPassword(c *gin.Context)  {}
func getAll(c *gin.Context)         {}
func getById(c *gin.Context)        {}
func deleteAccount(c *gin.Context)  {}
