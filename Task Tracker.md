## Enabled on Push and PR on `main`

- [X] Read SSDF overview; read SLSA “Provenance”; skim CycloneDX overview. 

- [ ] Add branch protection; add CODEOWNERS; add SECURITY.md.

- [ ] Set Actions defaults: least-privilege GITHUB_TOKEN;

- [ ] pin all actions to SHAs. 

- [ ] Add Scorecard, Dependency Review, Gitleaks checks. 

- [ ] Generate SBOM with Syft (CycloneDX); scan with Grype; fail build on High/Critical.

- [ ] Emit Artifact Attestations (provenance) for your build; (optional) Cosign keyless sign container. 

- [ ] Run drills: vulnerable dep PR; fake secret; verify attestation/signature. 

- [ ] Mark all CI jobs as Required status checks on main. 

- [ ] Write & publish blog with screenshots + links back to official docs.