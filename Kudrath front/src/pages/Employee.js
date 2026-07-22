

const Employees = () => {

    const[employees, setEmployees] = useState([]);

    useEffect = (() => {
        fetch("http://127.0.0.1:8000/employees")
        .then((response) => response.json())
        .then((data) => {
            setEmployees(data.data)
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return(
        <div style = {{padding: "20px"}}>
            <h1>Employee List</h1>

            {employees.map((emp) => (
                <div 
                    key = {emp.id}
                    style={{
                        border: "1px solid grey",
                        padding: "10px",
                        marginBottom: "10px"
                    }}>
                    <h3>{emp.employee_name}</h3>
                    <p><b>Designation:</b>{emp.designation}</p>
                    <p><b>Department:</b>{emp.department}</p>
                    <p><b>status:</b>{emp.attendancestatus}</p>
                    <p><b>Working Hours:</b>{emp.attendance.working_hours}</p>
            
                </div>
            ))}
        </div>
    )
};

export default Employees;