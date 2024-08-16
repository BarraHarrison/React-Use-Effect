function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        // whatever other fields your form has
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)

        setFormData({
            name: '',
            email: ''
        })
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"
                    value={formData.name} onChange={handleChange} placeholder="Enter name" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
                <button type="submit"></button>
            </form>
        </>
    )
}

export default Form;