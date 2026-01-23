# GitHub Copilot Instructions for docs.upsidedownlabs.tech

## Project Overview

This repository contains the Sphinx-based documentation for Upside Down Labs' bio-sensing hardware and software ecosystem. The site documents open-source bio-potential signal acquisition tools, including:

- **Hardware Products**: BioAmp series (EXG Pill, Neuro PlayGround Lite, Muscle BioAmp, Heart BioAmp, Eye BioAmp, Brain BioAmp), kits (DIY Neuroscience Basic/Pro), and development boards.
- **Software Suite**: Chords ecosystem (Web, Python, LSL, Java) for real-time signal visualization and processing.
- **Firmware**: Arduino sketches for various bio-signal acquisition (EMG, ECG, EOG, EEG).
- **Tools**: NPG Lite Flasher, Chords connectors, and utility scripts.

The documentation is written in reStructuredText (RST) and built using Sphinx, with a focus on educational content for researchers, makers, and students in HCI/BCI applications.

## Key Conventions

### Documentation Structure
- Use RST format with Sphinx directives
- Follow the existing folder hierarchy: `hardware/`, `software/`, `kits/`, `courses/`, `guides/`, `research/`
- Cross-reference using `:ref:` labels (e.g., `:ref:`bioamp-exg-pill``)
- Use relative paths for media: `../../../media/` from subdirectories

### RST Directives and Formatting
- **Figures**: `.. figure:: media/image.*` with `:align: center` and `:alt:` descriptions
- **YouTube Embeds**: `.. youtube:: VIDEO_ID` with `:align: center` and `:width: 100%`
- **Tables**: Use RST table syntax for specifications and connections
- **Notes/Warnings**: `.. note::`, `.. warning::`, `.. tip::`, `.. important::`
- **Code Blocks**: Use appropriate language highlighting (python, arduino, etc.)
- **Grid Layouts**: `.. grid::` for project showcases with `.. grid-item-card::`
- **Badges**: `:bdg-danger:` for version indicators

### Content Style
- Technical terms: ECG, EMG, EOG, EEG, ADC, MCU, SBC, HCI, BCI
- Maintain educational tone with step-by-step instructions
- Include safety warnings (power connections, skin preparation)
- Reference external resources (Arduino IDE, Chords Web) with links
- Preserve original English technical terms in translations

## Workflow Guidelines

### Documentation Updates
1. **Hardware Documentation**: When updating hardware specs, ensure tables match product datasheets
2. **Software Integration**: Reference Chords Web for visualization, include baud rates (115200) and pin configurations
3. **Firmware Links**: Use GitHub links to firmware repositories (e.g., `upsidedownlabs/Muscle-BioAmp-Arduino-Firmware`)
4. **Media Assets**: Place images in `media/` subdirectories, use wildcard extensions (`*.png`, `*.jpg`)
5. **Cross-References**: Update `:ref:` labels when restructuring sections

### Code Examples
- **Arduino Sketches**: Include full GitHub links, specify board selection and COM port detection
- **Python Scripts**: Reference Chords Python for data processing
- **Hardware Connections**: Use tables for pin mappings, include warnings about power polarity

### Translation Workflow
- Translate user-facing text while preserving RST structure and technical terms
- Maintain directive syntax and link targets
- Update alt texts and captions in target language
- Test builds after translation to ensure no broken references

## Integration Points

### Build System
- **Sphinx Configuration**: `conf.py` with custom CSS (`_static/css/custom.css`) and LaTeX preamble
- **Build Commands**: Use `make html` or `sphinx-build` for generation
- **Dependencies**: Listed in `requirements.txt` (Sphinx, themes, extensions)

### External Tools
- **Arduino IDE**: Referenced for firmware upload (legacy v1.8.19)
- **Chords Suite**: Web app for visualization, Python/LSL for data streaming
- **NPG Lite Flasher**: For ESP32-C6 firmware updates
- **GitHub**: Hosting for firmware repos and issue tracking

### Testing and Validation
- **Build Validation**: Run `make html` after changes to check for errors
- **Link Checking**: Verify all `:ref:`, GitHub links, and YouTube embeds
- **Media Paths**: Ensure relative paths resolve correctly from build directory

## Best Practices

### Content Quality
- **Accuracy**: Verify hardware specs and software versions against official sources
- **Completeness**: Include prerequisites, troubleshooting, and project ideas
- **Accessibility**: Provide multiple visualization options (Arduino IDE + Chords Web)
- **Safety**: Emphasize proper electrode placement, skin preparation, and electrical safety

### Code and Examples
- **Minimal Viable Code**: Provide complete but focused examples
- **Error Handling**: Include common troubleshooting steps
- **Version Compatibility**: Specify tested versions (Arduino IDE, Python, etc.)

### Collaboration
- **Issue Tracking**: Use GitHub issues for documentation bugs or feature requests
- **Pull Requests**: Include build validation and link checks
- **Translations**: Maintain separate branches or commits for language variants

### AI-Assisted Development
- **Context Awareness**: Reference this file when making changes to understand project patterns
- **Consistency**: Follow established RST patterns and terminology
- **Innovation**: Propose improvements that align with educational and open-source goals

This guide ensures AI agents can contribute effectively to the documentation while maintaining consistency with the project's bio-sensing focus and educational mission.