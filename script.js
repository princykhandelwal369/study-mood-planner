function getPlan() {

    // getting selected values
    let mood = document.getElementById("mood").value;
    let time = document.getElementById("time").value;

    let plan = "";

    // study plan logic
    if (mood === "tired") {

        if (time === "10min") {
            plan = "🌿 Revise one small topic calmly.";
        }

        else if (time === "30min") {
            plan = "📖 Watch a short concept video and revise notes.";
        }

        else {
            plan = "☕ Light study session with revision + easy MCQs.";
        }

    }

    else if (mood === "neutral") {

        if (time === "10min") {
            plan = "📝 Solve 5 quick practice questions.";
        }

        else if (time === "30min") {
            plan = "📚 Revise notes and solve MCQs.";
        }

        else {
            plan = "💡 Complete one focused study session.";
        }

    }

    else {

        if (time === "10min") {
            plan = "🔥 Quick revision sprint!";
        }

        else if (time === "30min") {
            plan = "🚀 Practice difficult problems.";
        }

        else {
            plan = "🎯 Deep work session + challenging questions.";
        }

    }

    // display output
    document.getElementById("output").innerHTML = plan;
}