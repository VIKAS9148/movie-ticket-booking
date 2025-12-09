pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/VIKAS9148/movie-ticket-booking.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t movie-booking-app:${BUILD_NUMBER} .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop movie-app || true'
                sh 'docker rm movie-app || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 3000:80 --name movie-app movie-booking-app:${BUILD_NUMBER}'
            }
        }
    }
}
