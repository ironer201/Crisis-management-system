document.addEventListener('DOMContentLoaded', async () => {
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const table = document.getElementById('reports-table');
    const tbody = document.getElementById('reports-body');

    try {
        const response = await fetch('/get-passive-reports');
        if (!response.ok) {
            throw new Error(`Failed to fetch reports: ${response.statusText}`);
        }

        const reports = await response.json();

        loading.classList.add('hidden');

        if (reports.length === 0) {
            error.textContent = 'No reports found.';
            error.classList.remove('hidden');
            return;
        }

        table.classList.remove('hidden');

        reports.forEach(report => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${report.survivor_gender || 'Not specified'}</td>
                <td>${report.date_of_birth || 'Not specified'}</td>
                <td>${report.date_of_incident || 'Not specified'}</td>
                <td>${report.report_type || 'Not specified'}</td>
                <td>${report.description || 'Not specified'}</td>
                <td>${report.location || 'Not specified'}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (err) {
        console.error('Error fetching reports:', err);
        loading.classList.add('hidden');
        error.textContent = 'Failed to load reports. Please try again later.';
        error.classList.remove('hidden');
    }
});