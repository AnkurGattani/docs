import { EditorComponent } from "./editor";

interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>;
};

const DocumentIdPage = async ( { params }: DocumentIdPageProps ) => {
    const awaitedParams = await params;
    const documentId  = awaitedParams.documentId;

    return (
        <div className="min-h-screen bg-[#fafbfd]">
            <EditorComponent />
        </div>
    );
}

export default DocumentIdPage;