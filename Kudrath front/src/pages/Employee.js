

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
        </div>
    )
}