import { useState, useEffect } from 'react';
import classes from './TelegramBotChat.module.css';

const TelegramBotChat = () => {
    const [scenario, setScenario] = useState('text'); // 'text' or 'ocr'
    const [step, setStep] = useState('confirm'); // 'confirm', 'logging', 'logged', 'cancelled'

    // Reset step when scenario changes
    useEffect(() => {
        setStep('confirm');
    }, [scenario]);

    const handleAction = (action) => {
        setStep('logging');
        setTimeout(() => {
            setStep(action === 'yes' ? 'logged' : 'cancelled');
        }, 800); // simulated network delay for ultimate realism
    };

    return (
        <div className={classes.window}>
            {/* Scenario Toggles */}
            <div className={classes.tabs}>
                <button 
                    className={`${classes.tab} ${scenario === 'text' ? classes.tabActive : ''}`}
                    onClick={() => setScenario('text')}
                >
                    Text Command
                </button>
                <button 
                    className={`${classes.tab} ${scenario === 'ocr' ? classes.tabActive : ''}`}
                    onClick={() => setScenario('ocr')}
                >
                    Receipt Photo OCR
                </button>
            </div>

            {/* Telegram Header */}
            <div className={classes.header}>
                <div className={classes.avatar}>S</div>
                <div className={classes.meta}>
                    <div className={classes.name}>Smerio Bot</div>
                    <div className={classes.status}>bot</div>
                </div>
            </div>

            {/* Chat Body */}
            <div className={classes.body}>
                {/* Scenario Messages */}
                {scenario === 'text' ? (
                    <>
                        <div className={`${classes.row} ${classes.rowUser}`}>
                            <div className={classes.bubbleUser}>
                                spent $15 at Subway
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={`${classes.row} ${classes.rowUser}`}>
                            <div className={classes.bubbleUserPhoto}>
                                <div className={classes.photoMock}>
                                    <div className={classes.receiptIcon}>🧾</div>
                                    <span>Starbucks Coffee #4211</span>
                                    <small>2 items • $12.50 Total</small>
                                </div>
                                <div className={classes.photoCaption}>snap_receipt_1902.jpg</div>
                            </div>
                        </div>
                    </>
                )}

                {/* Bot Response - Confirming state */}
                <div className={`${classes.row} ${classes.rowBot}`}>
                    <div className={classes.bubbleBot}>
                        {scenario === 'text' ? (
                            <>
                                📝 Yes, I am glad that you had a sandwich at <strong>Subway</strong>. I will add this as transaction:<br />
                                • Category: <strong>Food</strong><br />
                                • Subcategory: <strong>FastFood</strong><br />
                                • Amount: <strong>15.00</strong><br />
                                • Currency: <strong>USD</strong><br />
                                Is this correct?
                            </>
                        ) : (
                            <>
                                🔍 <em>Multimodal OCR extraction successful!</em><br />
                                📝 Captured Starbucks ticket:<br />
                                • Category: <strong>Food</strong><br />
                                • Subcategory: <strong>Coffee</strong><br />
                                • Amount: <strong>12.50</strong><br />
                                • Currency: <strong>USD</strong><br />
                                Is this correct?
                            </>
                        )}
                    </div>
                </div>

                {/* Logging loading state */}
                {step === 'logging' && (
                    <div className={`${classes.row} ${classes.rowBot}`}>
                        <div className={classes.bubbleBotLogging}>
                            <span className={classes.dot}></span>
                            <span className={classes.dot}></span>
                            <span className={classes.dot}></span>
                        </div>
                    </div>
                )}

                {/* Logged / Cancelled state */}
                {(step === 'logged' || step === 'cancelled') && (
                    <div className={`${classes.row} ${classes.rowBot}`}>
                        <div className={`${classes.bubbleBot} ${step === 'logged' ? classes.bubbleSuccess : classes.bubbleCancel}`}>
                            {step === 'logged' ? (
                                <>
                                    ✅ <strong>Logged successfully!</strong><br />
                                    The transaction has been safely synced with your standalone Smerio REST API.
                                </>
                            ) : (
                                <>
                                    ❌ <strong>Transaction cancelled.</strong><br />
                                    No records were logged. Memory remains fully stateless.
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Inline Action Buttons */}
            <div className={classes.keyboard}>
                {step === 'confirm' && (
                    <>
                        <button className={`${classes.btn} ${classes.btnYes}`} onClick={() => handleAction('yes')}>
                            ✅ Yes, log it
                        </button>
                        <button className={`${classes.btn} ${classes.btnNo}`} onClick={() => handleAction('no')}>
                            ❌ No, cancel
                        </button>
                    </>
                )}

                {step === 'logging' && (
                    <button className={classes.btnDisabled} disabled>
                        Syncing with secure gateway...
                    </button>
                )}

                {(step === 'logged' || step === 'cancelled') && (
                    <button className={`${classes.btn} ${classes.btnReset}`} onClick={() => setStep('confirm')}>
                        🔄 Try scenario again
                    </button>
                )}
            </div>
        </div>
    );
};

export default TelegramBotChat;
