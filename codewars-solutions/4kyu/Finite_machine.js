function traverseTCPStates(eventList) {
    let state = "CLOSED";

    const transitions = {
        "CLOSED": {
            "APP_PASSIVE_OPEN": "LISTEN",
            "APP_ACTIVE_OPEN": "SYN_SENT"
        },
        "LISTEN": {
            "RCV_SYN": "SYN_RCVD",
            "APP_CLOSE": "CLOSED"
        },
        "SYN_RCVD": {
            "RCV_ACK": "ESTABLISHED",
            "APP_CLOSE": "FIN_WAIT_1"
        },
        "SYN_SENT": {
            "RCV_SYN_ACK": "ESTABLISHED",
            "RCV_SYN": "SYN_RCVD",
            "APP_CLOSE": "CLOSED"
        },
        "ESTABLISHED": {
            "APP_CLOSE": "FIN_WAIT_1",
            "RCV_FIN": "CLOSE_WAIT"
        },
        "FIN_WAIT_1": {
            "RCV_FIN": "CLOSING",
            "RCV_ACK": "FIN_WAIT_2",
            // --- ADDED THIS LINE BACK ---
            "RCV_FIN_ACK": "TIME_WAIT" // A common simplification for combined FIN and ACK
            // ---------------------------
        },
        "CLOSING": {
            "RCV_ACK": "TIME_WAIT"
        },
        "FIN_WAIT_2": {
            "RCV_FIN": "TIME_WAIT"
        },
        "TIME_WAIT": {
            "APP_TIMEOUT": "CLOSED"
        },
        "CLOSE_WAIT": {
            "APP_CLOSE": "LAST_ACK"
        },
        "LAST_ACK": {
            "RCV_ACK": "CLOSED"
        }
    };

    for (const event of eventList) {
        if (state === "ERROR") {
            break;
        }

        const currentStateTransitions = transitions[state];

        if (currentStateTransitions && currentStateTransitions[event]) {
            state = currentStateTransitions[event];
        } else {
            state = "ERROR";
        }
    }

    return state;
}