#!/usr/bin/env bash
# Script de build pour Render.
# Construit le frontend Angular en production, construit le backend,
# puis copie le frontend compilé au bon endroit pour qu'Express le serve.
set -e

echo "== Build du frontend (Angular) =="
cd gradeforest-frontend
npm install --include=dev
npx ng build --configuration production
cd ..

echo "== Build du backend (TypeScript) =="
cd gradeforest-backend
npm install --include=dev
npx tsc -p .
cd ..

echo "== Copie du frontend compilé vers gradeforest-backend/public =="
rm -rf gradeforest-backend/public
mkdir -p gradeforest-backend/public
cp -r gradeforest-frontend/dist/gradeforest-frontend/* gradeforest-backend/public/

echo "== Build terminé =="
