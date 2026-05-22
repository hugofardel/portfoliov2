import Button from "@/components/Button";

function Contact() {
	return (
		<section id="contact" className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<h2>Contact</h2>
			</div>

			<div className="flex md:flex-row flex-col gap-6 pt-8">
				w
				<div className="space-y-4 flex-1">
					<div className="bg-backgroundtw text-foregroundtw shadow-2xs p-2 w-full">Lorem</div>
					<div className="bg-backgroundtw text-foregroundtw shadow-2xs p-2 w-full">Lorem</div>
					<div className="bg-backgroundtw text-foregroundtw shadow-2xs p-2 w-full">Lorem</div>
					<div className="bg-backgroundtw text-foregroundtw shadow-2xs p-2 w-full">Lorem</div>
				</div>
				<form action="" className="text-white grid grid-cols-1 gap-6 flex-1">
					<div className="flex w-full gap-2 flex-col *:w-full [&>.sr-only]:w-auto">
						<label htmlFor="" className="items-center font-medium select-none flex w-fit gap-2 leading-snug">
							Votre email
						</label>
						<input
							type="email"
							className="h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 md:text-sm"
						/>
					</div>

					<div className="flex w-full gap-2 flex-col *:w-full [&>.sr-only]:w-auto">
						<label htmlFor="" className="items-center font-medium select-none flex w-fit gap-2 leading-snug">
							Objet
						</label>
						<input
							type="text"
							className="h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40"
						/>
					</div>

					<div className="flex w-full gap-2 flex-col *:w-full [&>.sr-only]:w-auto">
						<label htmlFor="" className="items-center font-medium select-none flex w-fit gap-2 leading-snug">
							Message
						</label>
						<textarea
							className="resize-none w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 md:text-sm"
							placeholder="Votre message"
							rows={8}
						></textarea>
					</div>

					<Button>Envoyer</Button>
				</form>
			</div>
		</section>
	);
}

export default Contact;
