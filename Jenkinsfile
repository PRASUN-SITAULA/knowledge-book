pipeline {
    // for production environment use a dedicated agent for running tasks
    agent any

    tools{
        nodejs 'nodejs'
    }

    environment {
        AWS_REGION = 'us-east-1'
        S3_BUCKET = 'knowledgebookbucket'
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
            steps {
                sh 'npm install'
            }
        }

        stage("Lint"){
            steps {
                sh 'npm run lint'
            }
        }

        stage("Build"){
            steps {
                sh 'npm run build'
            }
        }

        stage("s3 Upload"){
            steps {
                withAWS(credentials: "AWS_CREDENTIALS_ID", region: "${AWS_REGION}") {
                    s3Upload(
                        bucket: "${S3_BUCKET}",
                        includePathPattern: '**/*',
                        workingDir: 'dist',
                        acl: 'PublicRead'
                    )
                }
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
