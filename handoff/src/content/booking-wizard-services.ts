/**
 * Wizard service options (slug / label / short blurb) shared by HeroBooker and `/booking`.
 * Kept separate from the `services/` content collection (Markdown service pages).
 */
export const services = [
  { slug: "therapeutic-massage", name: "Therapeutic", short: "Medium to firm pressure on the knots that actually matter." },
  { slug: "deep-tissue-massage", name: "Deep tissue", short: "Slower, deeper work through specific muscle layers." },
  { slug: "relaxation-massage", name: "Relaxation", short: "Steady, flowing pressure. Nervous-system first." },
  { slug: "prenatal-massage", name: "Prenatal", short: "Side-lying, supported. Second and third trimester." },
  { slug: "sports-massage", name: "Sports recovery", short: "Before a race, day after a long effort, or mid-training." },
] as const;

export type BookingWizardService = (typeof services)[number];
