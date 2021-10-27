# Generated by Django 3.2.8 on 2021-10-27 06:18

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('nickname', models.CharField(max_length=50, unique=True)),
                ('phone', models.CharField(max_length=20, null=True)),
                ('address', models.TextField(null=True)),
                ('profile_img', models.CharField(max_length=200, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('is_seller', models.BooleanField(default=False)),
                ('is_admin', models.BooleanField(default=False)),
                ('followers', models.ManyToManyField(related_name='followings', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
