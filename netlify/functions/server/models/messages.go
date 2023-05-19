package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Message struct {
	ID          primitive.ObjectID `bson:"_id"`
	Names       *string            `json:"names"`
	Email       *string            `json:"email"`
	Phonenumber *string            `json:"phonenumber"`
	Private     *string            `json:"private"`
	Public      *string            `json:"public"`
	Message     *string            `json:"message"`
}
