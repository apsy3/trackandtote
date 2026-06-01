# AGENTS

Project rules for the India ESG/GHG/OHSE Observatory:

1. Keep logic reusable and outside page components.
2. Use mock data first.
3. For every graph, show:
   - source
   - frequency
   - latest observation
   - retrieved-at timestamp
   - confidence
   - status
4. Do not claim all data is real-time.
5. Keep public-data connectors separate from UI components.
6. Do not add private-product features until requested.
7. Keep future calculator logic isolated in `packages/calculator-core`.
