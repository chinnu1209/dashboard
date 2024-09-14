// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Get all the icons by their IDs
    document.getElementById('voice-command').addEventListener('click', function () {
        alert('Voice Input/Command feature selected!');
    });
    document.getElementById('health-monitoring').addEventListener('click', function () {
        alert('Health Monitoring feature selected!');
    });
    document.getElementById('medicine-schedule').addEventListener('click', function () {
        alert('Medicine Schedule feature selected!');
    });
    document.getElementById('emergency-contact').addEventListener('click', function () {
        alert('Emergency Contact feature selected!');
    });
    document.getElementById('guardian-connection').addEventListener('click', function () {
        alert('Guardian Connection feature selected!');
    });
    document.getElementById('stress-relief-games').addEventListener('click', function () {
        alert('Games for Stress Relief feature selected!');
    });
});
