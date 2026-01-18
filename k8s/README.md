# Kubernetes Manifests – Notes App

This directory contains Kubernetes manifests to deploy the Notes application
(frontend, backend, PostgreSQL) on an existing Kubernetes cluster.

## Order of deployment

kubectl apply -f k8s/postgres/
kubectl apply -f k8s/backend/
kubectl apply -f k8s/frontend/

## Access

Frontend is exposed via NodePort (30001).


