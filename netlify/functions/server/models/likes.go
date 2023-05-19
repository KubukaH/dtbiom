package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Like struct {
	ID      primitive.ObjectID `bson:"_id"`
	LikedBy *string            `json:"likedby"`
	LikeId  *string            `json:"likeid"`
}
