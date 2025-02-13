# Generated by Django 5.0.6 on 2024-10-04 15:33

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Frontoffice', '0001_initial'),
        ('OutPatient', '0002_remove_lab_request_details_code_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='lab_request_details',
            name='Laboratory_Register_Id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Frontoffice.patient_laboratory_registration_detials'),
        ),
        migrations.AddField(
            model_name='lab_request_selected_details',
            name='Laboratory_Register_Id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Frontoffice.patient_laboratory_registration_detials'),
        ),
    ]
