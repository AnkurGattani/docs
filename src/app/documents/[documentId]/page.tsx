import { EditorComponent } from "./editor";
import { Room } from "./room";
import { Toolbar } from "./toolbar";
interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>;
};

const DocumentIdPage = async ( { params }: DocumentIdPageProps ) => {
    const awaitedParams = await params;
    const documentId  = awaitedParams.documentId;

    return (
        <div className="min-h-screen bg-[#fafbfd]">
            <Toolbar />
            <Room>
                <EditorComponent />
            </Room>
        </div>
    );
}

export default DocumentIdPage;