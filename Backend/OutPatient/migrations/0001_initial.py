# Generated by Django 5.0.6 on 2024-09-30 18:33

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Frontoffice', '0001_initial'),
        ('Masters', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Lab_ReportEntry_Details',
            fields=[
                ('report_id', models.AutoField(primary_key=True, serialize=False)),
                ('RegisterType', models.CharField(default='', max_length=30)),
                ('report_date', models.DateTimeField(auto_now=True)),
                ('report_time', models.TimeField(auto_now=True)),
                ('report_file', models.BinaryField(blank=True, null=True)),
                ('technician_name', models.CharField(default='Pending', max_length=60)),
                ('report_handovered_by', models.CharField(default='Pending', max_length=40)),
                ('report_handovered_to', models.CharField(default='Pending', max_length=40)),
                ('created_by', models.CharField(default='Pending', max_length=40)),
                ('status', models.CharField(default='Pending', max_length=40)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('Casuality_Register_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Frontoffice.patient_casuality_registration_detials')),
                ('IP_Register_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Frontoffice.patient_ip_registration_detials')),
                ('OP_Register_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Frontoffice.patient_appointment_registration_detials')),
            ],
            options={
                'db_table': 'Lab_ReportEntry_Details',
            },
        ),
        migrations.CreateModel(
            name='Lab_Request_Details',
            fields=[
                ('Request_Id', models.IntegerField(primary_key=True, serialize=False)),
                ('RegisterType', models.CharField(default='', max_length=30)),
                ('TestType', models.CharField(max_length=60)),
                ('Code', models.CharField(max_length=50)),
                ('Reason', models.CharField(default='', max_length=80)),
                ('Status', models.CharField(default='Request', max_length=20)),
                ('created_by', models.CharField(max_length=30)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('Casuality_Register_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Frontoffice.patient_casuality_registration_detials')),
                ('IP_Register_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Frontoffice.patient_ip_registration_detials')),
                ('OP_Register_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Frontoffice.patient_appointment_registration_detials')),
            ],
            options={
                'db_table': 'Lab_Request_Details',
            },
        ),
        migrations.CreateModel(
            name='Lab_Request_Selected_Details',
            fields=[
                ('SelectedRequest_Id', models.IntegerField(primary_key=True, serialize=False)),
                ('RegisterType', models.CharField(default='', max_length=30)),
                ('TestType', models.CharField(max_length=60)),
                ('Code', models.CharField(max_length=50)),
                ('Amount', models.IntegerField(default=0)),
                ('Status', models.CharField(default='pending', max_length=20)),
                ('created_by', models.CharField(max_length=30)),
                ('CategoryType', models.CharField(default='InHouse', max_length=20)),
                ('Address', models.CharField(default='', max_length=50)),
                ('Location', models.CharField(default='', max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('Casuality_Register_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Frontoffice.patient_casuality_registration_detials')),
                ('IP_Register_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Frontoffice.patient_ip_registration_detials')),
                ('OP_Register_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='selected_testname', to='Frontoffice.patient_appointment_registration_detials')),
            ],
            options={
                'db_table': 'Lab_Request_Selected_Details',
            },
        ),
        migrations.CreateModel(
            name='Ot_Request',
            fields=[
                ('Request_Id', models.AutoField(primary_key=True, serialize=False)),
                ('RegisterType', models.CharField(default='', max_length=30)),
                ('Surgery_Date', models.DateTimeField(auto_now=True)),
                ('Surgery_Time', models.TimeField(auto_now=True)),
                ('Remarks', models.TextField(blank=True, null=True)),
                ('Reason', models.TextField(blank=True, null=True)),
                ('Priority', models.CharField(max_length=40)),
                ('created_by', models.CharField(max_length=40)),
                ('Status', models.CharField(default='Pending', max_length=40)),
                ('Additional_Doctor', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Masters.doctor_personal_form_detials')),
                ('Casuality_Register_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Frontoffice.patient_casuality_registration_detials')),
                ('IP_Register_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Frontoffice.patient_ip_registration_detials')),
                ('OP_Register_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Frontoffice.patient_appointment_registration_detials')),
                ('Surgery_Name', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Masters.surgeryname_details')),
            ],
            options={
                'db_table': 'Ot_Request',
            },
        ),
        migrations.CreateModel(
            name='PaidTest_Favourites',
            fields=[
                ('reportfav_id', models.AutoField(primary_key=True, serialize=False)),
                ('test_type', models.CharField(default='Favourites', max_length=60)),
                ('category_type', models.CharField(default='', max_length=40)),
                ('value', models.CharField(default='', max_length=40)),
                ('description', models.TextField(blank=True, default='', null=True)),
                ('status', models.CharField(default='Pending', max_length=40)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('Registration_Id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fav_details', to='OutPatient.lab_reportentry_details')),
                ('favCode', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='paid_fav_details', to='Masters.testname_favourites')),
                ('testCode', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='paid_indivitual_details', to='Masters.labtestname_details')),
            ],
            options={
                'db_table': 'PaidTest_Favourites',
            },
        ),
        migrations.CreateModel(
            name='PaidTest_Indivitaul',
            fields=[
                ('reporttest_id', models.AutoField(primary_key=True, serialize=False)),
                ('test_type', models.CharField(default='Indivitual', max_length=60)),
                ('value', models.CharField(max_length=40)),
                ('category_type', models.CharField(max_length=40)),
                ('description', models.TextField(blank=True, null=True)),
                ('status', models.CharField(default='Pending', max_length=40)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('Registration_Id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='test_details', to='OutPatient.lab_reportentry_details')),
                ('testCode', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='paid_test_details', to='Masters.labtestname_details')),
            ],
            options={
                'db_table': 'PaidTest_Indivitaul',
            },
        ),
        migrations.CreateModel(
            name='Patient_Vital_Details',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Temperature', models.FloatField(blank=True, null=True)),
                ('Temperature_Status', models.FloatField(blank=True, null=True)),
                ('Pulse_Rate', models.IntegerField(blank=True, null=True)),
                ('SPO2', models.IntegerField(blank=True, null=True)),
                ('SPO2_Status', models.IntegerField(blank=True, null=True)),
                ('Heart_Rate', models.IntegerField(blank=True, null=True)),
                ('Heart_Rate_Status', models.IntegerField(blank=True, null=True)),
                ('Respiratory_Rate', models.IntegerField(blank=True, null=True)),
                ('Respiratory_Status', models.IntegerField(blank=True, null=True)),
                ('SBP', models.IntegerField(blank=True, null=True)),
                ('SBP_Status', models.IntegerField(blank=True, null=True)),
                ('DBP', models.IntegerField(blank=True, null=True)),
                ('Height', models.FloatField(blank=True, null=True)),
                ('Weight', models.FloatField(blank=True, null=True)),
                ('BMI', models.FloatField(blank=True, null=True)),
                ('WC', models.FloatField(blank=True, null=True)),
                ('HC', models.FloatField(blank=True, null=True)),
                ('BSL', models.FloatField(blank=True, null=True)),
                ('Painscore', models.IntegerField(blank=True, null=True)),
                ('SupplementalOxygen', models.CharField(blank=True, max_length=100, null=True)),
                ('SupplementalOxygen_Status', models.IntegerField(blank=True, null=True)),
                ('LevelOfConsiousness', models.CharField(blank=True, max_length=100, null=True)),
                ('LevelOfConsiousness_Status', models.IntegerField(blank=True, null=True)),
                ('CapillaryRefillTime', models.CharField(blank=True, max_length=100, null=True)),
                ('CapillaryRefillTime_Status', models.IntegerField(blank=True, null=True)),
                ('Type', models.CharField(blank=True, max_length=30, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('Created_by', models.CharField(max_length=30)),
                ('Registration_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='OP_Vitals_Registration_Id', to='Frontoffice.patient_appointment_registration_detials')),
            ],
            options={
                'db_table': 'Patient_Vital_Details',
            },
        ),
        migrations.CreateModel(
            name='Radiology_Request_Details',
            fields=[
                ('Radiology_RequestId', models.AutoField(primary_key=True, serialize=False)),
                ('RegisterType', models.CharField(default='', max_length=30)),
                ('IsSubTest', models.CharField(max_length=60)),
                ('TestCode', models.CharField(max_length=50)),
                ('SubTestCode', models.CharField(max_length=50)),
                ('Reason', models.CharField(default='', max_length=80)),
                ('Status', models.CharField(default='Request', max_length=20)),
                ('created_by', models.CharField(max_length=30)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('Casuality_Register_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Frontoffice.patient_casuality_registration_detials')),
                ('IP_Register_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Frontoffice.patient_ip_registration_detials')),
                ('OP_Register_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Frontoffice.patient_appointment_registration_detials')),
            ],
            options={
                'db_table': 'Radiology_Request_Details',
            },
        ),
        migrations.CreateModel(
            name='Radiology_Complete_Details',
            fields=[
                ('Radiology_CompleteId', models.IntegerField(primary_key=True, serialize=False)),
                ('RegisterType', models.CharField(default='', max_length=30)),
                ('ReportDate', models.DateTimeField(auto_now=True)),
                ('ReportTime', models.TimeField(auto_now=True)),
                ('RadiologistName', models.CharField(max_length=40)),
                ('Technician_Name', models.CharField(max_length=40)),
                ('Report', models.TextField()),
                ('Report_fileone', models.BinaryField(blank=True, null=True)),
                ('Report_filetwo', models.BinaryField(blank=True, null=True)),
                ('Report_filethree', models.BinaryField(blank=True, null=True)),
                ('Report_HandOverTo', models.CharField(max_length=30)),
                ('RelativeName', models.CharField(max_length=30)),
                ('Createdby', models.CharField(max_length=30)),
                ('Status', models.CharField(default='Completed', max_length=30)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('Casuality_Register_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Frontoffice.patient_casuality_registration_detials')),
                ('IP_Register_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Frontoffice.patient_ip_registration_detials')),
                ('OP_Register_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Frontoffice.patient_appointment_registration_detials')),
                ('Radiology_RequestId', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='OutPatient.radiology_request_details')),
            ],
            options={
                'db_table': 'Radiology_Complete_Details',
            },
        ),
        migrations.CreateModel(
            name='ReferalDoctorDetails',
            fields=[
                ('Refer_Id', models.IntegerField(primary_key=True, serialize=False)),
                ('PatientId', models.CharField(max_length=50)),
                ('VisitId', models.CharField(max_length=50)),
                ('ReferDoctorType', models.CharField(max_length=50)),
                ('Remarks', models.CharField(blank=True, max_length=200, null=True)),
                ('Status', models.BooleanField(default=True)),
                ('created_by', models.CharField(max_length=30)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('PrimaryDoctorId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='primary_doctor', to='Masters.doctor_personal_form_detials')),
                ('ReferDoctorId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='refer_doctor', to='Masters.doctor_personal_form_detials')),
            ],
            options={
                'db_table': 'ReferalDoctorDetails',
            },
        ),
    ]
