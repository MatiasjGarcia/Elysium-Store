export default function ButtonGeneric({name, color}) {
const ButtonStyle = {
    backgroundColor: color,
    color: 'white',
};
return (
    <div>
        <button style={ButtonStyle}>{name}</button>
    </div>
)
}