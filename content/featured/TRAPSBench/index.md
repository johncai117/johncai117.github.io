---
date: '2026-08-13'
title: 'TRAPSBench: VLMs Encode but Fail to Express Epistemic Restraint'
cover: './trapsbench.png'
github: 'https://github.com/facebookresearch/TRAPS-Benchmark'
external: 'https://arxiv.org/abs/2608.13167'
tech:
  - Vision-Language Models
  - Benchmarks
  - Probing & Steering
  - MuJoCo
showInProjects: true
---

Paper published at COLM 2026.

Introduced TRAPSBench, a procedurally generated video benchmark of 1,404 matched physics pairs where a single targeted change makes the outcome undeterminable, and the Penalized Epistemic Calibration Score (PECS). Across 16 VLMs from five families, models rarely abstain on their own, yet linear probes decode answerability from hidden states at up to 0.91 AUROC. The bottleneck is expression, not perception.
