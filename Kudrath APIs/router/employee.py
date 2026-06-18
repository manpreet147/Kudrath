from fastapi import APIRouter

router = APIRouter()

employee_data = {
  "status": True,
  "message": "Employee records fetched successfully",
  "data": [
    {
      "id": 101,
      "employee_id": "EMP101",
      "employee_name": "Arjun Reddy",
      "designation": "HR Executive",
      "branch_name": "Ameerpet",
      "department": "Human Resources",
      "email": "arjun.reddy@example.com",
      "phone": "9876501234",
      "biometric_id": "7012",
      "attendance": {
        "date": "2026-05-03",
        "check_in": "09:12:45",
        "check_out": "18:05:20",
        "working_hours": "08:52:35",
        "status": "Present"
      }
    },
    {
      "id": 102,
      "employee_id": "EMP102",
      "employee_name": "Meghana Sharma",
      "designation": "Receptionist",
      "branch_name": "Banjara Hills",
      "department": "Front Office",
      "email": "meghana.sharma@example.com",
      "phone": "9988776655",
      "biometric_id": "7013",
      "attendance": {
        "date": "2026-05-03",
        "check_in": "10:01:10",
        "check_out": "18:45:30",
        "working_hours": "08:44:20",
        "status": "Present"
      }
    },
    {
      "id": 103,
      "employee_id": "EMP103",
      "employee_name": "Rahul Verma",
      "designation": "Sales Executive",
      "branch_name": "Kondapur",
      "department": "Sales",
      "email": "rahul.verma@example.com",
      "phone": "9012345678",
      "biometric_id": "7014",
      "attendance": {
        "date": "2026-05-03",
        "check_in": "08:55:40",
        "check_out": "17:50:15",
        "working_hours": "08:54:35",
        "status": "Present"
      }
    },
    {
      "id": 104,
      "employee_id": "EMP104",
      "employee_name": "Sneha Kapoor",
      "designation": "Nutritionist",
      "branch_name": "Jubilee Hills",
      "department": "Wellness",
      "email": "sneha.kapoor@example.com",
      "phone": "9090909090",
      "biometric_id": "7015",
      "attendance": {
        "date": "2026-05-03",
        "check_in": "09:30:00",
        "check_out": "18:20:10",
        "working_hours": "08:50:10",
        "status": "Present"
      }
    },
    {
      "id": 105,
      "employee_id": "EMP105",
      "employee_name": "Kiran Kumar",
      "designation": "Branch Manager",
      "branch_name": "Kukatpally",
      "department": "Operations",
      "email": "kiran.kumar@example.com",
      "phone": "9345678910",
      "biometric_id": "7016",
      "attendance": {
        "date": "2026-05-03",
        "check_in": "08:40:22",
        "check_out": "19:02:18",
        "working_hours": "10:21:56",
        "status": "Present"
      }
    }
  ]
}

@router.get("/employees")
def get_employees():
    return employee_data