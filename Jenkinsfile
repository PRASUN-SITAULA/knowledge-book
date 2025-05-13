pipeline{
    // for production environment use a dedicated agent for running tasks
    agent any

    tools {
        nodejs "nodejs"
    }

    stages{
        stage("Git Checkout"){
            steps{
                git branch: 'main',
                    url: "https://github.com/PRASUN-SITAULA/knowledge-book.git",
                    credentialsId: 'GITHUB_TOKEN'
            }
        }

        stage("Install Dependencies"){
            steps{
                sh 'npm install'
            }
        }

        stage("Lint"){
            steps{
                sh 'npm lint'
            }
        }
    }

    post{
        always{
            echo "Pipeline finished"
        }
        success{
            echo "Pipeline completed successfully"
        }
        failure{
            echo "Pipeline failed"
        }
    }
}
