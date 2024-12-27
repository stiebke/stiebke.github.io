document$.subscribe(() => {
    const instance = new Typewriter('#typewriter', {
        strings: [
            'Systemadministrator', 
            'Site Reliability Engineer',
            'DevOps Engineer',
            'IT Operations Engineer',
            'Informationssicherheit',
            'Datenschutz',
        ],
        autoStart: true,
        loop: true,
    });
})