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
                bat 'docker build -t movie-booking-app:%BUILD_NUMBER% .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker stop movie-app || exit 0'
                bat 'docker rm movie-app || exit 0'
            }
        }

        stage('Run New Container') {
            steps {
                bat 'docker run -d -p 3000:80 --name movie-app movie-booking-app:%BUILD_NUMBER%'
            }
        }
    }
}
