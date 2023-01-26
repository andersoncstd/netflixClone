export default function(props) {
    return (
        <>
            <h3 style={{
                    fontSize: '19px',
                    textAlign: props.textAlign,
                    paddingTop: '16px',
                    color: 'var(--base-color-white)',
                    fontWeight: '300'
            }}>{props.title}</h3>
        </>
    );
}