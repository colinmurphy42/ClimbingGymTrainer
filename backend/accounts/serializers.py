#https://www.youtube.com/watch?v=_OhF6FEdIao
from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs={
            'password': {'write_only': True} #So that someone cant just read the json
        }

    def create(self, validated_data):
        user = User(**validated_data)
        #Hash users password
        user.set_password(validated_data['password'])
        user.save()
        return user