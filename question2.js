function delayedGreeting(name) {
    setTimeout(function() {
        console.log(`Hello, ${name}!`);
    }, 2000); 
}

// Example usage:
delayedGreeting("Godwin"); // Logs "Hello, Godwin!" after 2 seconds