export function companyUrl(url: string) {
  return url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i)![2];
}

export const handleFormSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
  setForm: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      resume: string;
      coverLetterMessage: string;
    }>
  >
) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  form.reset();
  setForm({
    name: '',
    email: '',
    resume: '',
    coverLetterMessage: '',
  });
  setSubmitted(true);
  setTimeout(() => {
    setSubmitted(false);
  }, 3000);
};
