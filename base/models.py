from django.db import models


class Portfolio(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(default="static/img/Blank_Image.png")
    description = models.TextField()
    
    class Meta:
        verbose_name_plural = "Portfolioes"

    def __str__(self):
        return self.title


class Skill(models.Model):
    name = models.CharField(max_length=200)
    percentage = models.IntegerField()

    def __str__(self):
        return self.name
