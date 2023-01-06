const Form = ({email, setEmail, password, setPassword}) => {
    
    return (
    
        <>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Ingrese su nombre</label>
            <input onChange={(e) => setEmail(e.target.value)}
            type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            value={email}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input onChange={(e) => setPassword(e.target.value)}
            type="password" className="form-control" id="exampleInputPassword1"
            value={password}/>
        </div>
        </>
    
    )
}
export default Form