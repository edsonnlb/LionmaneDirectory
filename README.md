# LionmaneDirectory
<h1>CRUD Test Running Instructions</h1>

<h2>DATA</h2>
<ol>
    <li>Run <i>lionmane_directory.sql</i> located on the root directory.</li>
    <li>(Optional) Run <i>lionmane_directory_initial_data.sql</i> located on the root directory to insert dummy data.</li>
</ol>

<h2>REST API - Laravel Project -</h2>
<ol>
    <li>Requirements:
        <ul>
            <li>Composer (available at: https://getcomposer.org/download/)</li>
            <li>Laravel (Execute on CLI: composer global require laravel/installer)</li>
        </ul>
    </li>
    <li>Execute on CLI located at <i>directory_api</i> folder: php artisan serve</li>
</ol>

<h2>Frontend - Angular Project -</h2>
<ol>
    <li>Requirements:
        <ul>
            <li>Recommended NPM (available with NodeJS at: https://nodejs.org/es/download/)</li>
            <li>Angular CLI (available with NPM on CLI: npm install -g @angular/cli)</li>
        </ul>
    </li>
    <li>Update the project dependencies executing on a CLI located at <i>directory</i> folder: ng update</li>
    <li>Match Laravel Project API URL with environment endpoint located in <i>/src/environments/environment.ts</i></li>
    <li>Execute the project with: ng serve</li>
</ol>
