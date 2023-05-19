package main

import (
	"os"

	"server/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	port := os.Getenv("PORT")

	if port == "" {
		port = "8007"
	}

	router := gin.New()
	router.Use(gin.Logger())

	router.Use(cors.Default())

	// messages endpoint
	router.POST("/msg/create", routes.AddMessage)
	router.GET("/msgs", routes.GetMessages)
	router.GET("/msg/:id/", routes.GetMessageById)
	router.PUT("/msg/update/:id", routes.UpdateMessage)
	router.DELETE("/msg/delete/:id", routes.DeleteMessage)

	// Likes end point
	router.POST("/like", routes.MakeLike)
	router.GET("/likes", routes.GetMessageLikes)
	router.DELETE("/unlike", routes.UnLike)

	// this runs the server and allows it to listen to requests.
	router.Run(":" + port)
}
