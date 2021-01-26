# Generated by Django 3.1.5 on 2021-01-26 11:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20210125_2005'),
    ]

    operations = [
        migrations.CreateModel(
            name='YoutubeDownloader',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('url', models.URLField()),
                ('file_location', models.CharField(max_length=200)),
                ('time', models.CharField(max_length=100)),
                ('short_url', models.CharField(max_length=10)),
            ],
        ),
    ]
