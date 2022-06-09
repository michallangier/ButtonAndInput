function Input({ inp }) {

    return (
        <input
            type="text"
            name="typedColor"
            onChange={(event) => {
                inp(event.target.value)
            }}
            autoComplete="off"
        />
    )
}
export default Input;