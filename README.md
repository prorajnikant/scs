## Enabled on Push and PR on `main`

- **THEORY**
    - [X] Read & write SSDF goals; skim details
    - [X] Read & write SLSA “Provenance” overview
    - [X] Read & write CycloneDX overview
    - [X] Document weird/ fine-print technology behaviours; *will help the blog content*
    - [X] Create an open questions list; *they are marked as red, and change to green when answered*

- **Practical**
    - [X] Add branch protection; add CODEOWNERS; ~~add SECURITY.md~~

    - [X] Set Actions defaults: least-privilege GITHUB_TOKEN;

    - [ ] pin all actions to SHAs. 

    - [X] Add Scorecard, Dependency Review, Gitleaks checks. 

    - [X] Generate SBOM with Syft (CycloneDX); scan with Grype; fail build on High/Critical.

    - [X] Emit Artifact Attestations (provenance) for your build; (optional) Cosign keyless sign container. 

    - [X] Run drills: vulnerable dep PR; fake secret; verify attestation/signature. 

    - [X] Mark all CI jobs as Required status checks on main. 

    - [X] Write & publish blog with screenshots + links back to official docs.

- **Pending reads:**
    - [ ] https://fossa.com/learn/software-supply-chain-security/
    - [ ] https://openssf.org/blog/2023/10/03/running-sigstore-as-a-managed-service-a-tour-of-sigstores-public-good-instance/