import classes from './ChatMockup.module.css';

const ChatMockup = ({ messages, monoBubble = false }) => {
    return (
        <div className={classes.window}>
            <div className={classes.header}>
                <div className={classes.avatar}>L</div>
                <div className={classes.meta}>
                    <div className={classes.name}>Ledgent</div>
                    <div className={classes.status}>bot</div>
                </div>
            </div>
            <div className={classes.body}>
                {messages.map((m, i) => {
                    const isBot = m.from === 'bot';
                    const bubbleClass = [
                        isBot ? classes.bubbleBot : classes.bubbleUser,
                        monoBubble && isBot ? classes.mono : ''
                    ].filter(Boolean).join(' ');
                    return (
                        <div key={i} className={classes.row + ' ' + (isBot ? classes.rowBot : classes.rowUser)}>
                            <div className={bubbleClass}>{m.text}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ChatMockup;
