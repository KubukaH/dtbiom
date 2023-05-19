package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Account struct {
	ID          primitive.ObjectID `bson: "_id"`
	Names       *string            `json:"names"`
	Email       *string            `json:"email"`
	Role        *string            `json:"role"`
	Password    *string            `json:"password"`
	AcceptTerms *string            `json:"acceptTerms"`
}
