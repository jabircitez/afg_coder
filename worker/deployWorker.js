// prototype worker: در تولید واقعی به Redis/BullMQ و اتصال به S3 و OpenAI نیاز است
console.log('deploy worker starting (prototype)')
// TODO: Pull jobs from queue, download files, call AI fixer (OpenAI API), run security checks,
// upload final files to S3, create public URL (e.g., https://p.afg.coder/<projectId>), notify user
