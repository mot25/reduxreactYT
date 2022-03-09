import { addManyCustomers } from "../store/customerReducer"

export const fetchCustomer = () => {
    return (dispath) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => dispath(addManyCustomers(data)))

    }
}