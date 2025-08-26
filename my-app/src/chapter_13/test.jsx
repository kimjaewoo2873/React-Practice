function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div classNmae="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function App(props) {
    return (
        <SplitPane left={<Contacts />} right={<Chat />} />
    )
}