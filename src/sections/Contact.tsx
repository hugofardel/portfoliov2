import Button from "@/components/Button";
import emailjs from "@emailjs/browser";
import { Mail, Send } from "lucide-react";
import {
	type ChangeEvent,
	type FormEvent,
	useEffect,
	useRef,
	useState,
} from "react";

const PROJECT_TYPES = [
	"Site vitrine",
	"Application web",
	"Maintenance & évolution",
	"Recrutement",
	"Autre",
] as const;

type ProjectType = (typeof PROJECT_TYPES)[number];

type FormState = {
	name: string;
	email: string;
	projectType: ProjectType;
	message: string;
};

const INITIAL_FORM: FormState = {
	name: "",
	email: "",
	projectType: PROJECT_TYPES[0],
	message: "",
};

function Contact() {
	const [form, setForm] = useState<FormState>(INITIAL_FORM);
	const [status, setStatus] = useState<
		"idle" | "sending" | "success" | "error"
	>("idle");
	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "");
	}, []);

	function handleChange(
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
	) {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	}

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setStatus("sending");

		if (!formRef.current) return;

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "",
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "",
				formRef.current,
			)
			.then(() => {
				setStatus("success");
				setForm(INITIAL_FORM);
			})
			.catch(() => {
				setStatus("error");
			});
	}

	return (
		<section id="contact" className="mt-15 sm:mt-50 px-3">
			<article className="relative rounded-xl bg-card p-6 sm:p-8 shadow-lg shadow-primary/5 border border-border/60 max-w-4xl mx-auto overflow-hidden">
				<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

				<div className="mb-6 inline-flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
					<Mail className="size-7" aria-hidden="true" />
				</div>

				<h2 className="text-2xl sm:text-4xl mb-1 text-ternary-light font-medium text-center">
					Un projet en tête ?{" "}
					<span className="text-[oklch(0.69_0.24_280)]">Discutons-en.</span>
				</h2>

				<p className="mt-2 text-gray-400 tracking-wide text-center">
					Remplissez le formulaire ci-dessous et je vous répondrez dans les 48 heures.
				</p>

				<form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-5">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
						<div className="space-y-1.5">
							<label
								htmlFor="name"
								className="text-sm font-medium text-gray-300"
							>
								Nom
							</label>
							<input
								id="name"
								name="name"
								type="text"
								required
								maxLength={50}
								value={form.name}
								onChange={handleChange}
								placeholder="Ton nom"
								className="w-full rounded-lg border border-border/60 bg-background px-4 py-2.5 text-foreground placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
							/>
						</div>
						<div className="space-y-1.5">
							<label
								htmlFor="email"
								className="text-sm font-medium text-gray-300"
							>
								Email
							</label>
							<input
								id="email"
								name="email"
								type="email"
								required
								maxLength={254}
								pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
								value={form.email}
								onChange={handleChange}
								placeholder="ton@email.com"
								className="w-full rounded-lg border border-border/60 bg-background px-4 py-2.5 text-foreground placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
							/>
						</div>
					</div>

					<div className="space-y-1.5">
						<label
							htmlFor="projectType"
							className="text-sm font-medium text-gray-300"
						>
							Type de projet
						</label>
						<select
							id="projectType"
							name="projectType"
							value={form.projectType}
							onChange={handleChange}
							className="w-full rounded-lg border border-border/60 bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
						>
							{PROJECT_TYPES.map((type) => (
								<option key={type} value={type}>
									{type}
								</option>
							))}
						</select>
					</div>

					<div className="space-y-1.5">
						<label
							htmlFor="message"
							className="text-sm font-medium text-gray-300"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							required
							rows={5}
							minLength={10}
							maxLength={2000}
							value={form.message}
							onChange={handleChange}
							placeholder="Décris ton projet..."
							className="w-full resize-none rounded-lg border border-border/60 bg-background px-4 py-2.5 text-foreground placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
						/>
					</div>

					<div className="flex flex-col items-center gap-3 pt-2">
						<Button type="submit" disabled={status === "sending"}>
							<Send className="h-5 w-5" />
							{status === "sending" ? "Envoi en cours..." : "Envoyer"}
						</Button>

						{status === "success" && (
							<p className="text-green-400 bg-green-400/10 border-green-400 border rounded-md mt-2 px-2 py-3 w-full text-center text-sm">
								Message envoyé !
							</p>
						)}
						{status === "error" && (
							<p className="text-red-400 bg-red-400/10 border-red-400 border rounded-md mt-2 px-2 py-3 w-full text-center text-sm">
								Erreur lors de l'envoi. Veuillez réessayer plus tard.
							</p>
						)}
					</div>
				</form>
			</article>
		</section>
	);
}

export default Contact;
