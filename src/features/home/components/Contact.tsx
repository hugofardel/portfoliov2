import { Mail, Send } from "lucide-react";
import { type FormEvent, useState } from "react";

const PROJECT_TYPES = [
	"Site vitrine",
	"Application web",
	"Maintenance & évolution",
	"Recrutement",
	"Autre",
];

function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
	const [message, setMessage] = useState("");

	function handleSubmit(e: FormEvent) {
		e.preventDefault();

		const subject = encodeURIComponent(`[Portfolio] ${projectType} — ${name}`);
		const body = encodeURIComponent(
			`Nom : ${name}\nEmail : ${email}\nType de projet : ${projectType}\n\n${message}`,
		);

		window.location.href = `mailto:hugo.fardel@gmail.com?subject=${subject}&body=${body}`;
	}

	return (
		<section id="contact" className="mt-15 sm:mt-50">
			<article className="relative rounded-xl bg-card p-6 sm:p-8 shadow-lg shadow-primary/5 border border-border/60 max-w-4xl mx-auto overflow-hidden">
				<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

				<div className="mb-6 inline-flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
					<Mail className="size-7" aria-hidden="true" />
				</div>

				<h2 className="text-2xl sm:text-4xl font-medium text-ternary-light text-center">
					Un projet en tête ? <span className="text-primary">Discutons-en.</span>
				</h2>
				<p className="mt-2 text-gray-400 tracking-wide text-center">
					Remplis le formulaire ci-dessous et je te répondrai le plus rapidement possible.
				</p>

				<form onSubmit={handleSubmit} className="mt-8 space-y-5">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
						<div className="space-y-1.5">
							<label htmlFor="name" className="text-sm font-medium text-gray-300">
								Nom
							</label>
							<input
								id="name"
								type="text"
								required
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="Ton nom"
								className="w-full rounded-lg border border-border/60 bg-background px-4 py-2.5 text-foreground placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
							/>
						</div>
						<div className="space-y-1.5">
							<label htmlFor="email" className="text-sm font-medium text-gray-300">
								Email
							</label>
							<input
								id="email"
								type="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="ton@email.com"
								className="w-full rounded-lg border border-border/60 bg-background px-4 py-2.5 text-foreground placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
							/>
						</div>
					</div>

					<div className="space-y-1.5">
						<label htmlFor="projectType" className="text-sm font-medium text-gray-300">
							Type de projet
						</label>
						<select
							id="projectType"
							value={projectType}
							onChange={(e) => setProjectType(e.target.value)}
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
						<label htmlFor="message" className="text-sm font-medium text-gray-300">
							Message
						</label>
						<textarea
							id="message"
							required
							rows={5}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder="Décris ton projet..."
							className="w-full resize-none rounded-lg border border-border/60 bg-background px-4 py-2.5 text-foreground placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
						/>
					</div>

					<div className="flex justify-center pt-2">
						<button
							type="submit"
							className="flex items-center gap-2.5 cursor-pointer px-8 py-3 font-semibold text-lg rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary/80 active:scale-[0.98] transition-all duration-300"
						>
							<Send className="h-5 w-5" />
							Envoyer
						</button>
					</div>
				</form>
			</article>
		</section>
	);
}

export default Contact;
