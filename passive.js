document.addEventListener('DOMContentLoaded', function() {
    const reportType = document.getElementById('report-type');
    const detailsSection = document.getElementById('details-section');
    const dobInput = document.getElementById('dob');
    const ageDisplay = document.getElementById('age-display');
    const form = document.querySelector('form');

    // Toggle details section
    reportType.addEventListener('change', function() {
        if (this.value) {
            detailsSection.classList.remove('hidden');
        } else {
            detailsSection.classList.add('hidden');
        }
    });

    // Calculate age
    dobInput.addEventListener('change', function() {
        const dob = new Date(this.value);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        if (!isNaN(age) && age >= 0) {
            ageDisplay.textContent = `Age: ${age} years`;
        } else {
            ageDisplay.textContent = 'Age: —';
        }
    });

    // Handle form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formData = new FormData(form);

        // Validate report type
        if (!formData.get('reportType')) {
            alert('Please select a report type.');
            return;
        }

        // Debug: Log form data
        console.log('Form data:');
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        try {
            const response = await fetch('/submit', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const message = await response.text();
                alert('Report has been submitted successfully!');
                form.reset();
                detailsSection.classList.add('hidden');
                ageDisplay.textContent = 'Age: —';
            } else {
                console.error('Submission failed:', response.status, response.statusText);
                alert('Failed to submit report. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again.');
        }
    });
});

//ok