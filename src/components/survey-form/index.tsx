import React, { useState } from 'react'
import { Radio, Button, Form } from 'antd/es'
import Typography from 'antd/es/typography'
import Card from 'antd/es/card'
import Input from 'antd/es/input'

const { Title, Text } = Typography;
const { TextArea } = Input;

export default function SurveyForm() {
  const [answers, setAnswers] = useState<{ q1: string | null; q2: string; q3: string | null; q4: string }>({
    q1: null,
    q2: "",
    q3: null,
    q4: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Kiểm tra xem có ít nhất một câu trả lời nào không
  const isSubmitEnabled = Object.values(answers).some((ans) => ans !== null && ans !== "");

  const handleRadioChange = (question: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [question]: value }));
  };

  const handleTextChange = (question: "q2" | "q4", e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswers((prev) => ({ ...prev, [question]: e.target.value }));
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", answers);
    setSubmitted(true);
  };

  const handleClear = () => {
    setAnswers({ q1: null, q2: "", q3: null, q4: "" });
    setSubmitted(false);
  };

  return (
    <div className="flex justify-center items-center bg-white pt-[24px] md:pt-[80px] pb-[60px] z-10">
      <div className=" px-[20px] gap-[24px] ">
        <div className=" font-medium text-2xl leading-[30px] md:text-5xl md:leading-[60px] flex md:pb-[16px] pb-[24px] md:pb-[40px]">
          <img
            aria-hidden
            src="/image/icon_username.png"
            alt="icon username"
            width={24}
            height={24}
            className="md:w-[56px] md:h-[56px]"
          />
          &nbsp; Liberius様 顧客アンケート
        </div>

        {/* Câu hỏi 1 */}
        <Card className="!p-0 mb-4 rounded-lg !border-l-[3px] border-l-[#2E60CF] md:mb-[41px] ">
          <img
            aria-hidden
            src="/image/1.png"
            alt="number 1"
            width={16}
            className="h-[45px] md:w-[44px] md:h-[100px] md:mr-[37px] mt-[8px] md:mt-[24px] mr-[15px]"
          />
          <div className="flex flex-col">
            <Text className="flex">
              <div className="flex items-center justify-between gap-4 font-normal text-base leading-5 md:text-xl md:leading-7 pb-[24px] md:pb-[38px]">
                Pioneroをソフトウェア開発のニーズがある知人に紹介する可能性は、10点満点中何点でしょうか？
              </div>
            </Text>
            <Radio.Group
              value={answers.q1 ?? "0"}
              onChange={(e) => handleRadioChange("q1", String(e.target.value))}
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <Radio key={num} value={num}>
                  {num}
                </Radio>
              ))}
            </Radio.Group>
          </div>
        </Card>

        {/* Câu hỏi 2 */}
        <Card className="!p-0 mb-4 rounded-lg !border-l-[3px] border-l-[#2E60CF] md:mb-[41px]">
          <div className="flex max-md:!flex-col md:!flex-row">
            <div className="max-md:!flex max-md:!flex-row ">
              <img
                aria-hidden
                src="/image/2.png"
                alt="number 2"
                width={26}
                className="h-[45px] md:w-[69px] md:h-[100px] md:mr-[37px] mt-[8px] md:mt-[24px] mr-[15px]"
              />
              <Text className="flex">
                <div className="flex items-center justify-between gap-4 font-normal text-base leading-5 md:text-xl md:leading-7 pb-[24px] md:pb-[38px] md:hidden">
                  問1で10点満点を達成するために、Pioneroの改善すべき点についてご意見はございますか？
                </div>
              </Text>
            </div>
            <div className="md:flex md:flex-col">
              <Text className="flex">
                <div className="flex items-center justify-between gap-4 font-normal text-base leading-5 md:text-xl md:leading-7 pb-[24px] md:pb-[38px] max-md:hidden">
                  問1で10点満点を達成するために、Pioneroの改善すべき点についてご意見はございますか？
                </div>
              </Text>
              <TextArea
                name="q2"
                value={answers.q2}
                onChange={(e) => handleTextChange("q2", e)}
                placeholder="Your answer"
              />
            </div>
          </div>
        </Card>

        {/* Câu hỏi 3 */}
        <Card className="!p-0 mb-4 rounded-lg !border-l-[3px] border-l-[#2E60CF] md:mb-[41px]">
          <img
            aria-hidden
            src="/image/3.png"
            alt="number 3"
            width={27}
            className="h-[45px] md:w-[72px] md:h-[100px] md:mr-[37px] mt-[8px] md:mt-[24px] mr-[15px]"
          />
          <div className="flex flex-col">
            <Text>
              <div className="flex items-center justify-between gap-4 font-normal text-base leading-5 md:text-xl md:leading-7 pb-[24px] md:pb-[38px]">

                1から10点の評価で、今後のプロジェクトでPioneroのPM/開発を引き続き一緒に進めたいと思いますか？
              </div>
            </Text>
            <Radio.Group
              value={answers.q3 ?? "0"}
              onChange={(e) => handleRadioChange("q3", String(e.target.value))}
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <Radio key={num} value={num}>
                  {num}
                </Radio>
              ))}
            </Radio.Group>
          </div>
        </Card>

        {/* Câu hỏi 4 */}
        <Card className="!p-0 mb-4 rounded-lg !border-l-[3px] border-l-[#2E60CF] md:mb-[41px]">
          <div className="flex max-md:!flex-col md:!flex-row">
            <div className="max-md:!flex max-md:!flex-row ">
              <img
                aria-hidden
                src="/image/4.png"
                alt="number 4"
                width={30}
                className="h-[45px] md:w-[80px] md:h-[100px] md:mr-[37px] mt-[8px] md:mt-[24px] mr-[15px]"
              />
              <Text>
                <div className="flex items-center justify-between gap-4 font-normal text-base leading-5 md:text-xl md:leading-7 pb-[24px] md:pb-[38px] md:hidden">
                  問3で10点満点を達成するために、PioneroのPM/開発に改善すべき点についてご意見はございますか？
                </div>
              </Text>
            </div>
            <div className="md:flex md:flex-col">
              <Text>
                <div className="flex items-center justify-between gap-4 font-normal text-base leading-5 md:text-xl md:leading-7 pb-[24px] md:pb-[38px] max-md:hidden">
                  問3で10点満点を達成するために、PioneroのPM/開発に改善すべき点についてご意見はございますか？
                </div>
              </Text>
              <TextArea
                name="q4"
                value={answers.q4}
                onChange={(e) => handleTextChange("q4", e)}
                placeholder="Your answer"
              />
            </div>
          </div>
        </Card>

        <Button
          type="primary"
          block
          disabled={!isSubmitEnabled}
          onClick={handleSubmit}
          style={{ backgroundColor: submitted ? "#2E60CF" : "" }}
          className="h-[55px] gap-2.5 rounded-md pt-[14px] pr-6 pb-[14px] pl-6 text-[18px] !md:w-[160px]"
        >
          Send
        </Button>

        {isSubmitEnabled && (
          <Button type="link" block onClick={handleClear} className="mt-2 text-blue-600 text-[20px] md:float-right">
            Clear all your answers
          </Button>
        )}

        <div className="font-normal italic text-[14px] leading-[17.5px] pt-[20px] md:text-[16px]">
          You can submit this evaluation form multiple times.
        </div>
      </div>
    </div>
  )
}

