from django.db import models

class Category(models.Model):

    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length = 20)
    description = models.TextField(max_length = 140)

    class Meta:
        app_label = 'aaw_ms'
